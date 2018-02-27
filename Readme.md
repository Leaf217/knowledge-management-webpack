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

#### singleton.js---对操作数据的结果进行处理
- 调用ajax.js中的ajax语句请求或者操作数据，并将得到的数据存入list对象中，便于后续的操作

#### listItem.js---主页上一条knowledge的模板
- 用于渲染主页中的knowledge标签