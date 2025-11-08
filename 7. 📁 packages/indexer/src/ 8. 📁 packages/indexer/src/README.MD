
- ساختار پوشه‌ها  
- مستندات کامل (README.md)  
- CI/CD با GitHub Actions  
- داشبورد گرافیکی با تم و لوگو  
- پیشنهاد لایسنس و فایل‌های تکمیلی  

---

📁 ساختار نهایی پروژه

`
apz-monitoring/
├── docker-compose.yml
├── .github/
│   └── workflows/monitoring.yml
├── monitoring/
│   ├── prometheus.yml
│   └── grafana/
│       ├── provisioning/dashboards/apz-dashboard.json
│       └── branding/
│           ├── apz-logo.png
│           └── custom.css
├── packages/
│   ├── monitoring/metrics.ts
│   └── indexer/
│       └── src/
│           ├── monitor.ts
│           └── index.ts
├── README.md
├── LICENSE
└── .gitignore
`

---

📝 README.md — مستند رسمی پروژه

`markdown

📡 APZ Chain Monitoring Stack

This repository provides a complete monitoring stack for APZ Chain, including Prometheus metrics, a custom Grafana dashboard, and Docker-based deployment.

---

🚀 Features

- Real-time metrics: block sync, RPC latency, indexer errors
- Grafana dashboard with APZ branding (logo + theme)
- Dockerized setup for local or cloud deployment
- CI/CD pipeline for testing and Docker image build

---

📁 Project Structure

| Path | Purpose |
|------|---------|
| docker-compose.yml | Launches Prometheus and Grafana |
| monitoring/prometheus.yml | Prometheus scrape config |
| monitoring/grafana/branding/ | Custom logo and CSS |
| monitoring/grafana/provisioning/dashboards/ | Prebuilt Grafana dashboard |
| packages/monitoring/metrics.ts | Prometheus metrics definitions |
| packages/indexer/src/monitor.ts | Metric reporting logic |
| packages/indexer/src/index.ts | Metric server + scheduler |
| .github/workflows/monitoring.yml | CI/CD pipeline |
| README.md | Project documentation |

---

📊 Metrics

| Metric | Description |
|--------|-------------|
| apzlastsynced_block | Last synced block by indexer |
| apzindexererrors_total | Total indexer errors |
| apzrpclatency_seconds | RPC response time in seconds |

---

🎨 Branding

- Logo: apz-logo.png
- Theme: custom.css (dark blue background, white text)

---

🛠 Setup

`bash
git clone https://github.com/YOUR_USERNAME/apz-monitoring.git
cd apz-monitoring
docker-compose up
`

Access:
- Prometheus: http://localhost:9090  
- Grafana: http://localhost:3000 (user: admin, pass: admin)

---

⚙️ CI/CD

GitHub Actions pipeline runs on every push to main:

`yaml
name: APZ Monitoring CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm test

  docker-deploy:
    needs: build-and-test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - uses: docker/build-push-action@v4
        with:
          context: .
          push: false
          tags: apz-monitoring:latest
`

---

📜 License

This project is licensed under the MIT License. See LICENSE for details.

---

🤝 Contributing

We welcome contributors who value transparency, reproducibility, and open collaboration. Please read CONTRIBUTING.md (coming soon) for guidelines.

---

🧠 Credits

Built with ❤️ by Khalil Heyrani and the APZ Chain community.
`

---

📜 LICENSE — MIT License (پیشنهادی)

`text
MIT License

Copyright (c) 2025 Khalil Heyrani

Permission is hereby granted, free of charge, to any person obtaining a copy...
`

---

📄 .gitignore

`gitignore
node_modules/
dist/
.env
*.log
*.DS_Store
`

---
