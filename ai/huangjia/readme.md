 # 黄佳老师的AI课

 - 直播预测
 
 - 魔搭社区
   大模型中国社区，免费的，上传微调模型
   - 阿里云提供的虚拟机
   - python + ai 机器学习环境
     - python  notebook 
   .ipynb 后缀
   - 本地电脑带不动
   - 简单，方便

 - python 和 js 比较
   - 数据分析库
   - read_csv()  读取各种格式的文件
   - head(n) 读取前n行数据

 - matplotlib
   - 数据可视化库
   - 
   - plt.plot(df_ads['转发量'], df_ads['成交额'], 'r.', label='data dot')
     plt.xlabel('shares')
     plt.ylabel('sales')
     plt.legend()
     plt.show()
     - df_ads['转发量'] x轴
     - df_ads['成交额'] y轴
     - 'r.' 红色点  g. 绿色点  b. 蓝色点
     - label 右上角的标签
       - 直观分析数据

 - sklearn
   python 流行的机器学习库
   LinearRegression() y = ax + b 线性回归
   训练 容错
   - sklearn  和逻辑区别
     选择模型，模型需要的数据，训练模型，测试模型
     train_test_split() 训练集和测试集
   