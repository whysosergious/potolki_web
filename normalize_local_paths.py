import re
import os

def normalize_html_for_local_use(html_content, is_oferta=False):
    # 1. Remove <link rel="canonical">
    html_content = re.sub(r'<link rel="canonical" href=".*?"\s*>', '', html_content, flags=re.DOTALL)
    
    # 2. Remove yandex-verification and google-site-verification meta tags
    html_content = re.sub(r'<meta name="yandex-verification" content=".*?"\s*>', '', html_content, flags=re.DOTALL)
    html_content = re.sub(r'<meta name="google-site-verification" content=".*?"\s*>', '', html_content, flags=re.DOTALL)

    # 3. Convert root-relative paths to local relative paths for href, src, and action
    # This regex looks for attributes (href, src, or action) whose values start with '/'
    # and does not contain "://" (to exclude absolute external URLs).
    # The character class [^]"'#\s>] ensures the closing ']' is treated literally.
    pattern = r'(href|src|action)=["\'](/[^]"\'#\s>]*?)["\']'

    def replace_path(match):
        attr = match.group(1)
        path = match.group(2)
        
        # Special handling for root '/' which should point to index.html
        if path == '/':
            return f'{attr}="index.html"'
        
        # For other root-relative paths, remove the leading slash
        return f'{attr}="{path.lstrip("/")}"'

    html_content = re.sub(pattern, replace_path, html_content)

    # Special handling for internal fragment links (like /#about -> index.html#about)
    # This ensures that links to sections within the current page (or index.html) are handled correctly.
    html_content = re.sub(r'href=["\"]/#(.*?)["\"]', r'href="index.html#\1"', html_content)

    return html_content

# --- Process index.html ---
with open("index.html", "r") as f:
    index_html_content = f.read()

modified_index_html_content = normalize_html_for_local_use(index_html_content, is_oferta=False)

with open("index.html", "w") as f:
    f.write(modified_index_html_content)
print("index.html further modified for local use.")

# --- Process oferta.html ---
with open("oferta.html", "r") as f:
    oferta_html_content = f.read()

modified_oferta_html_content = normalize_html_for_local_use(oferta_html_content, is_oferta=True)

with open("oferta.html", "w") as f:
    f.write(modified_oferta_html_content)
print("oferta.html further modified for local use.")