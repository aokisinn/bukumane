# ブクマネ

## 環境構築手順

```bash
cd /path/to/work_dir
git clone git@bitbucket.org:mediaxis/kitabai.git
cd kitabai
docker-compose build
docker-compose up -d
docker-compose exec app php artisan migrate
npm install
```
