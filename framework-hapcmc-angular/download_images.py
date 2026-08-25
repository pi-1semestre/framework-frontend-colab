import urllib.request
import urllib.parse
import json
import os

chars = {
    "pepe": "Pepe",
    "vo": "Vó",
    "marilu": "Marilu",
    "ramirez": "Ramirez",
    "beto": "Beto_Massa",
    "guto": "Guto",
    "gaston": "Gastón",
    "ritinha": "Ritinha",
    "mario": "Mário",
    "morte": "A_Morte",
    "loira-do-banheiro": "Loira_do_Banheiro",
    "cupido": "Cupido",
    "diabo": "O_Diabo",
    "sergio": "Sérgio",
    "antagonista": "Bicho_Papão" # Using Bicho Papão as an antagonist fallback if needed, or Antagonista
}

out_dir = "public/assets/images"
os.makedirs(out_dir, exist_ok=True)

# Use user agent to avoid 403
req_headers = {'User-Agent': 'Mozilla/5.0'}

for key, title in chars.items():
    api_url = f"https://historietas-assombradas.fandom.com/pt-br/api.php?action=query&titles={urllib.parse.quote(title)}&prop=pageimages&format=json&pithumbsize=500"
    
    try:
        req = urllib.request.Request(api_url, headers=req_headers)
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            pages = data['query']['pages']
            page = list(pages.values())[0]
            
            img_url = ""
            if 'thumbnail' in page:
                img_url = page['thumbnail']['source']
            else:
                print(f"No image found for {title}, using UI avatar fallback")
                img_url = f"https://ui-avatars.com/api/?name={key}&background=b982d4&color=100b14&size=512"
                
            out_path = os.path.join(out_dir, f"{key}.jpg")
            img_req = urllib.request.Request(img_url, headers=req_headers)
            with urllib.request.urlopen(img_req) as img_resp:
                with open(out_path, 'wb') as f:
                    f.write(img_resp.read())
            print(f"Downloaded {key}.jpg")
    except Exception as e:
        print(f"Failed for {key}: {e}")
