# BH4HOM QRZ Page

个人业余无线电QRZ页面 / Personal Amateur Radio QRZ Page

## 部署 / Deployment

直接部署到 GitHub Pages 即可。

## 文件说明 / Files

- `index.html` - 主页面
- `contacts.csv` - 通联日志数据

## CSV格式 / CSV Format

```csv
日期时间,对方呼号,频率,模式,己方RST,对方RST,己方功率,对方功率,位置,设备,天线,天气,QSL
2025/01/15 14:30,BA1AA,14.250,SSB,59,59,100,50,Shanghai,IC-7300,Dipole,Sunny,已发
```

## 自定义 / Customization

- QSL卡片：替换 `index.html` 中的 `.qsl-card` 占位符为 `<img>` 标签
- 荣誉展示：替换 `.honor-item` 占位符为实际内容

73!
