 - 认识几个url
   url的设计模式  restful API  (一切都是资源)
   网站是用来暴露资源的  如何将资源暴露出去
   - http://localhost:3001/posts/ 列表页的链接
   - http://localhost:3001/posts/:id  id 查询参数 详细页的链接
   - http://localhost:3001/users/:id   用户主页链接
     
 - 数据查询  Read     (增查改删 CRUD(create read update delete))
 - 访问资源的方式
   - apiFox 是啥？ web 请求代理
     Get  http://localhost:3001/posts/1 (浏览器默认 只能发送get请求)
     Patch http://localhost:3001/posts/1 (修改)
   - 资源 db.json   users  posts
   - HTTP 协议 
     - 请求行 Method (动作 GET | PATCH 修改| POST 新增) + url (资源)  
     - 请求头 Cookie Content-Type: text/json……
     - 请求体  数据

   - json-server
     - http 服务
     - db.json 数据资源向外提供访问 CRUD

 - 会设计restful API 接口
   - 需求
     - 新增一篇文章(找到文章总体)
       POST  http://localhost:3001/posts      (请求行) 
       {……}                                   (请求体)

     - 删除 文章2
       DELETE  http://localhost:3001/posts/2      (请求行)
       删除请求 没有请求体

 - json-server 是一个支持restful api 设计的数据服务器 


