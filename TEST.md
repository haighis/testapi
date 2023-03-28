openapi-generator-cli generate -g typescript-angular -i http://localhost:7878/v3/api-docs -o ./  --additional-properties npmName=testapi,snapshot=false,ngVersion=10.0.0,npmVersion=0.0.1

git init 
git add --a
git commit -m "inital commit"
git remote add origin git@github.com:haighis/testapi.git

npm i git+ssh://github.com:haighis/testapi.git