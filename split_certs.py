from PIL import Image
import os

img_path = "/Users/ksaikranth/.gemini/antigravity/brain/2d8f12c5-f0db-4ec2-8e70-30aeb93ce727/uploaded_image_1765266151733.png"
output_dir = "src/assets"

try:
    img = Image.open(img_path)
    width, height = img.size
    print(f"Image Size: {width}x{height}")

    # Layout is 3 cols, 2 rows.
    col_w = width // 3
    row_h = height // 2

    # Row 1
    c1 = img.crop((0, 0, col_w, row_h))
    c2 = img.crop((col_w, 0, col_w*2, row_h))
    c3 = img.crop((col_w*2, 0, width, row_h))
    # Row 2
    c4 = img.crop((0, row_h, col_w, height))
    c5 = img.crop((col_w, row_h, col_w*2, height))
    c6 = img.crop((col_w*2, row_h, width, height))

    certs = [c1, c2, c3, c4, c5, c6]

    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    for i, c in enumerate(certs):
        c.save(os.path.join(output_dir, f"cert{i+1}.png"))
        print(f"Saved {output_dir}/cert{i+1}.png")
        
except Exception as e:
    print(f"Error: {e}")
