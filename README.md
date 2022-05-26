# Chỉnh sửa Merchant

## Merchant
List toàn bộ Merchant nằm ở tệp ```list.json``` chưa một ***array***
Thứ tự hiển thị phụ thuộc vào vị trí merchant ở trong list

```
[
	{
	"name":  "VuaNem",
	"image":  "/images/partners/vuanem_logo.png",
	"type":  "BRANDHOT",
	"website":  "https://vuanem.com/?utm_source=fundiin&utm_medium=referral&utm_campaign=fundiin"
	},
	...
]
```
trong đó
```
"name": Tên/ID của Merchant
"image": Đường dẫn ảnh của merchant (tỷ lệ 1:1) tính từ /public
"type": Loại Merchant
"website": Đường dẫn tới website ở target _blank
```
## Các loại merchant

```
{
	"BRANDHOT":  "Brand hot",
	"SUCKHOEVALAMDEP":  "Sức khỏe và làm đẹp",
	"THOITRANGNU"  :  "Thời trang Nữ",
	"THOITRANGNAM"  :  "Thời trang Nam",
	"PHUKIENTHOITRANG":  "Phụ kiện thời trang",
	"NHACUAVADOISONG":  "Nhà cửa và đời sống",
	"GIAODUC":  "Giáo dục",
	"THETHAOVADULICH":  "Thể thao & Du lịch",
	"MEVABE":  "Mẹ & Bé",
	"KHAC":  "Khác",
	"COMINGSOON":  "Coming soon"
}
```
# Chỉnh sửa Banner
Banner nằm ở tệp ```banner.json```  chứa array
```
[
	{
	"title":  "chirstmas",
	"image":  "images/chirstmas.jpg"
	},
	....
]
```
```
"title" chứ tên/id unique của banner
"image" đường dẫn tới ảnh banner (1920x850)
```