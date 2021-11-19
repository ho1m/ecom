# ecom - DB FIRST

1. /client and npm i 

2. open ecom.sln as project

3. add db connection

4. change appsettings.json SqlConnect to new db path

5. Scaffold-DbContext "{{NEW DB PATH}}" Microsoft.EntityFrameworkCore.SqlServer -ContextDir Data -Context SqlContext -OutputDir Entities -Force
