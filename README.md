# ブクマネ

## 環境構築手順

```bash
cd /path/to/work_dir
git clone git@bitbucket.org:mediaxis/bukumane.git
cd bukumane
docker-compose build
docker-compose up -d
docker-compose exec app php artisan migrate
npm install
docker-compose exec app php artisan db:seed --class=UserTableSeeder
```
