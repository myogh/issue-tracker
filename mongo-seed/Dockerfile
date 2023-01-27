FROM mongo:5.0

COPY init.json /init.json
CMD mongoimport --host mongodb --db issuetracker --collection issues --type json --file /init.json --jsonArray
