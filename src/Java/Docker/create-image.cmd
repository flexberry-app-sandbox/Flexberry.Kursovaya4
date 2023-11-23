docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya4-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya4-java/app ../../..
