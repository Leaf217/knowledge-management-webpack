#### knowledgeData.js---知识列表数据

- 刚开始将知识列表放在一个数组中，每条知识由一个Map存储；
- 后来还是将知识列表放在一个数组中，每条知识由一个对象存储，原因是将其存入localStorage中时，第一步还要将Map转换为对象，因此直接使用后来这种方式存储。

#### dao.js---操作数据
- 获取数据列表（getDataList），无参数；
- 通过id获取某个knowledge（getKnowledgeById），有参数id；
- 通过搜索框的输入查找knowledge（searchKnowledge），有参数title或者tags；
- 添加knowledge（addData），有参数一条存在对象中的knowledge

#### ajax.js---异步请求数据
- 建立url与调用的操作数据的方法间的映射关系（mapping）
- 调用相应方法请求数据


