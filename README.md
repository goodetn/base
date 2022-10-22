# `base` - `dự án mẫu`
```
 Base project html css js
```

## Cài đặt và thiết lập Extension cần cài đặt hỗ trợ phát triển dự án html sass
```
  Setting > Auto Save - chọn afterDelay (tự lưu sau
  khoảng thời gian, kg cần save)
```
1. Live Server
```
  Cách dùng:
  Chọn file html muốn mở(ở đây ta chọn file 
  index.html file gốc của dự án) > nhấn 
  [Open with live server]
```

2. Live Sass Compiler (deprecated > new live sass compiler)
```
  Setting > search sass - live sass compile > setting
  format > Edit in setting > savePath: '/css'
```
```
  "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css",
        },
    ]
```
```
  Cách dùng:
  nhấn chọn file sass cần biên dịch: chọn watch-sass
  dưới taskbar => thư mục /css sẽ đc tạo 1 file css + 1 file css.map tương ứng.
```
3. Html to Css
