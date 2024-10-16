+++
title = '应用数理统计-题型整理'
date = 2024-08-28T18:42:57+08:00

tags=["数学","课程笔记"]

showSummary=true

Summary="统计学是一门伟大的学科，科学的统计揭示真理，更科学的统计掩盖事实。"

+++

{{< katex >}}

## 专题一 概率基础 （第一题）

### 1. 1 理论

**标准手写希腊字母：**

<img src="pic\4595e5bf9A.png" alt="请添加图片描述" style="zoom: 25%;" />

在本文中，定义：

<img src="pic\c5CE03CC8Djpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

#### 1.1.1 统计量

<img src="pic\D634602f4f.png" alt="请添加图片描述" style="zoom:33%;" />

#### 1.1.2 四大分布与抽样分布定理

<img src="pic\E1DD43fCCA.png" alt="请添加图片描述" style="zoom: 33%;" />

<img src="pic\AA8B1E33CB.png" alt="请添加图片描述" style="zoom:33%;" />

<img src="pic\526dF5CF35.png" alt="请添加图片描述" style="zoom:30%;" />



{{< alert >}}
==在考试时进行区间估计和假设检验时，使用的是上侧分位点！（但课本上的表大多是下侧的，记得换算）==
{{< /alert >}}

<img src="pic\bcd0cB377B.png" alt="在这里插入图片描述" style="zoom: 67%;" />

<img src="pic\DaC64CedAb.png" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\AeaAC93A91.png" alt="在这里插入图片描述" style="zoom:67%;" />

#### 1.1.3 正态运算性质

<img src="pic/11131.png" alt="请添加图片描述" style="zoom:150%;" />

标准正态下侧分位点运算公式：
$$
\Phi(-x ) = 1–\Phi(x)
$$

#### 1.1.4 典型题目

##### 独立性判断和查表算数

<img src="pic\6BcdB5323d.png" alt="请添加图片描述" style="zoom: 33%;" />

<img src="pic\7477cB0676.png" alt="请添加图片描述" style="zoom: 37%;" />

<img src="pic\5736cAaFeF.png" alt="请添加图片描述" style="zoom: 37%;" />

##### 例题

###### 2018 一 

<img src="pic\ab005B20f4jpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\04F792dbbC.png" alt="请添加图片描述" style="zoom: 55%;" />

<img src="pic\D06E161dde.png" alt="请添加图片描述" style="zoom: 33%;" />

### 1.2.  题目汇总

#### 1.2.1. 独立性问题

###### 2019 一

<img src="pic\f0b7400b2Ajpeg" alt="在这里插入图片描述" style="zoom:25%;" />

<img src="pic\FdD3E8d0BBjpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\1EC8B1DEd7.png" alt="请添加图片描述" style="zoom: 33%;" />



#### 2. 查表凑数题

###### 2012 一

<img src="pic\eEFa290e3ajpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\1C9a9419bC.png" alt="请添加图片描述" style="zoom:33%;" />

###### 2016 一

<img src="pic\Dd056ccbFEjpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\dAffe2D3b1jpeg" alt="在这里插入图片描述" style="zoom:50%;" />

<img src="pic\7AB7fff3e1jpeg" alt="在这里插入图片描述" style="zoom: 20%;" />



###### 2017 一

![在这里插入图片描述](pic/122201711.png)

![在这里插入图片描述](pic/122201712.png)

<img src="pic\4447E9eF49jpeg" alt="在这里插入图片描述" style="zoom: 60%;" />





#### 3.其他

###### 2015 一（求样本容量）

<img src="pic\5d613f08Ecjpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\84CF5f528djpeg" alt="在这里插入图片描述" style="zoom:33%;" />

###### 2020 一（核方法求条件分布）

<img src="pic\eb566e7be2jpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\70D271f9e4.png" alt="请添加图片描述" style="zoom: 33%;" />



## 专题二 贝叶斯估计（第二题）

### 2.1 理论

#### 2.1.1 贝叶斯估计基本方法

<img src="pic\1581B5e7dA.png" alt="请添加图片描述" style="zoom: 33%;" />

<img src="pic\A8e8AB177ajpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

#### 2.1.2 核方法

{{< alert >}}
==什么是“核”：一个分布密度函数去掉与主要变量无关的系数就是“核”==
{{< /alert >}}

<img src="pic\7FdD9EF92c.png" alt="请添加图片描述" style="zoom: 30%;" />

<img src="pic\7F1d6c0CAc.png" alt="请添加图片描述" style="zoom: 30%;" />

#### 2.1.3 三种损失函数下的贝叶斯估计

<img src="pic\A71b87C3cF.png" alt="请添加图片描述" style="zoom: 55%;" />

#### 2.1.4 典型题目

##### （1）离散先验下点估计

###### 2020 二

<img src="pic\75Cba2Dba7jpeg" alt="在这里插入图片描述" style="zoom: 77%;" />

<img src="pic\eea5C55FD9.png" alt="请添加图片描述" style="zoom:67%;" />

<img src="pic\BCCf2D7D5B.png" alt="请添加图片描述" style="zoom: 33%;" />



##### （2）连续先验下点估计

###### 2015 二

<img src="pic\8a8234aF3djpeg" alt="在这里插入图片描述" style="zoom: 57%;" />

<img src="pic\c8263fAC99.png" alt="请添加图片描述" style="zoom: 33%;" />

###### 2012 二

<img src="pic\2F8dc565Cdjpeg" alt="在这里插入图片描述" style="zoom: 30%;" />

<img src="pic\43CCbb7c7a.png" alt="请添加图片描述" style="zoom: 67%;" />

###### 课本P101（习题二）32题改

<img src="pic\f0330c6F72.png" alt="在这里插入图片描述" style="zoom: 33%;" />

![请添加图片描述](pic/2121410132.png)

<img src="pic\0A20A8EaD0jpeg" alt="在这里插入图片描述" style="zoom: 67%;" />



### 2.2. 题目汇总

##### 2.2.1 离散先验下点估计

见2.1.4

##### 2.2.2 连续先验下点估计

###### 2016 二

<img src="pic\4dD66638eAjpeg" alt="在这里插入图片描述" style="zoom: 55%;" />

<img src="pic\BfAe1B2Cc5jpeg" alt="在这里插入图片描述" style="zoom: 27%;" />

###### 2017 二 / 2023 二（重难点）

2017 

![在这里插入图片描述](pic/2222220172.png)

<img src="pic\0C61Dd3bb4jpeg" alt="在这里插入图片描述" style="zoom: 67%;" />

<img src="pic\3ceCd5b5eEjpeg" alt="在这里插入图片描述" style="zoom: 43%;" />

###### 2018 二

<img src="pic\33b9F2E7c4jpeg" alt="在这里插入图片描述" style="zoom: 55%;" />

<img src="pic\96bCB7a3ebjpeg" alt="在这里插入图片描述" style="zoom: 30%;" />

<img src="pic\A8a6BaEf11.png" alt="请添加图片描述" style="zoom: 29%;" />



###### 2019 二 难点（加权损失配凑分布计算）

<img src="pic\bEA4AdDbfcjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\D37Afc3b10jpeg" alt="在这里插入图片描述" style="zoom:50%;" />

<img src="pic\850af8B45C.png" alt="请添加图片描述" style="zoom: 33%;" />

<img src="pic\64ACf2D0Fb.png" alt="请添加图片描述" style="zoom: 30%;" />

###### 2021 六

<img src="pic\Ac7BD591Dejpeg" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\a8Ee56dAB0jpeg" alt="在这里插入图片描述" style="zoom:50%;" />

<img src="pic\c0DeE741d4jpeg" alt="在这里插入图片描述" style="zoom:50%;" />

##### 2.2.3. 连续先验下区间估计

课本79页

## 专题三 点估计（第三题）

### 3.1 理论

#### 3.1.1. 矩估计

<img src="pic\10aa86d81C.png" alt="请添加图片描述" style="zoom:29%;" />

{{< alert >}}
  ==注意：矩估计一般使用原点矩（A）,且低阶矩优先于高阶矩。==
{{< /alert >}}

<img src="pic\63D9dDCFc5jpeg" alt="在这里插入图片描述" style="zoom: 67%;" />

##### **均方误差MSE**

对于估计值为 $\hat\theta$ 的参数估计，其均方误差为：
$$
MSE = E(\hat{\theta} - \theta)^2
$$
{{< alert >}}
==不难看出，对于无偏估计，其估计的均方误差就是估计量的方差==
{{< /alert >}}

##### 顺序统计量的联合分布

<img src="pic\feE17DfECf.png" alt="在这里插入图片描述" style="zoom: 80%;" />

<img src="pic\EeCcc9f93f.png" alt="在这里插入图片描述" style="zoom:80%;" />

##### 常用计算技巧

<img src="pic\b9415f6ddC.png" alt="请添加图片描述" style="zoom: 29%;" />

#### 3.1.2. 极大似然估计



![在这里插入图片描述](pic/312000.png)

<img src="pic\6f90948673jpeg" alt="在这里插入图片描述" style="zoom: 33%;" />



<img src="pic\F7bea086bejpeg" alt="在这里插入图片描述" style="zoom: 33%;" />



### 3.2. 题目汇总

###### 2012 三

<img src="pic/image-20240828183245932.png" alt="image-20240828183245932" style="zoom:20%;" />

<img src="pic\4FafC16Ea2.png" alt="在这里插入图片描述" style="zoom:67%;" />

###### 2015 三

<img src="pic\A6E9C9cab8jpeg" alt="在这里插入图片描述" style="zoom: 27%;" />

<img src="pic\911da5F451jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

###### 2017 三

![在这里插入图片描述](pic/322017301.png)

<img src="pic\ee1Fbf25aajpeg" alt="在这里插入图片描述" style="zoom: 60%;" />

<img src="pic\73C23c8Ecbjpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

###### 2018 三

<img src="pic\cD3cEd7cad.png" alt="在这里插入图片描述" style="zoom: 33%;" />

<img src="pic\7a39cAe7D2jpeg" alt="在这里插入图片描述" style="zoom:33%;" />

###### 2019 三

<img src="pic\090bdA403djpeg" alt="在这里插入图片描述" style="zoom: 23%;" />

<img src="pic\7deC53AF1Cjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\58b5FeBc4djpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

###### 2019 四

<img src="pic\b3Ebeee6fCjpeg" alt="在这里插入图片描述" style="zoom: 22%;" />

<img src="pic\8FF98Edd4Ejpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

###### 2020 三

<img src="pic\F9476efA18jpeg" alt="在这里插入图片描述" style="zoom: 57%;" />

<img src="pic\E1fB83Ed8Ejpeg" alt="在这里插入图片描述" style="zoom:50%;" />



###### 2021 七

<img src="pic\e342CA9AbEjpeg" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\DF74bfFBBDjpeg" alt="在这里插入图片描述" style="zoom:40%;" />

<img src="pic\F30Aa678A6jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\0EBaAAab47jpeg" alt="在这里插入图片描述" style="zoom: 25%;" />





## 专题四 区间估计（第四题）

### 4.1. 单一总体区间估计

#### 4.1.1 典型题目

###### 2012 四

<img src="pic\57977ccecFjpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\dCaECbaDBb.png" alt="请添加图片描述" style="zoom: 30%;" />

###### 2015 四

<img src="pic\1Eddd63594jpeg" alt="在这里插入图片描述" style="zoom: 27%;" />

<img src="pic\AEae77eF8c.png" alt="请添加图片描述" style="zoom: 33%;" />

#### 4.1.2 题目汇总

###### 2016 三

<img src="pic\1783cAfB32jpeg" alt="在这里插入图片描述" style="zoom: 23%;" />

<img src="pic\b68DcA5Cc6jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\C56ab38719jpeg" alt="在这里插入图片描述" style="zoom:25%;" />

###### 2020 四

<img src="pic\459a2efF7D.png" alt="在这里插入图片描述" style="zoom: 75%;" />

<img src="pic\dFF7cb1daAjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />



###### 2021 一

<img src="pic\5B33B06b4cjpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\0637fB718bjpeg" alt="在这里插入图片描述" style="zoom: 20%;" />



### 2. 混合总体区间估计

###### 2018 四

<img src="pic\bff3096fb3jpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

{{< alert >}}
==对于多正态总体的区间估计，依然可以按照之前的计算方式，得出估计类型后，直接带入模板进行区间估计==
{{< /alert >}}

<img src="pic\fbaFFA5824jpeg" alt="在这里插入图片描述" style="zoom: 39%;" />

###### 2019 五

<img src="pic\6b557dcBA5.png" alt="在这里插入图片描述" style="zoom: 89%;" />

<img src="pic\4d558F7cd8.png" alt="请添加图片描述" style="zoom:33%;" />

## 专题五 参数假设检验（第五题）

### 5.1. 单一总体假设检验

#### 5.1.1 典型题目

###### 2017 五

![在这里插入图片描述](pic/51120175.png)

<img src="pic\FdbE40fc7E.png" alt="在这里插入图片描述" style="zoom: 67%;" />

<img src="pic\c89af9a712.png" alt="请添加图片描述" style="zoom:67%;" />

### 5.2. 混合总体假设检验

#### 5.2.1 典型题目

###### 2012 五

<img src="pic\50C0ad442ejpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\2304f54AaB.png" alt="请添加图片描述" style="zoom: 67%;" />

<img src="pic\1C3DeAEcC5.png" alt="请添加图片描述" style="zoom: 25%;" />

###### 2015 五

<img src="pic\fB2f0037ACjpeg" alt="请添加图片描述" style="zoom: 50%;" />

<img src="pic\eAfA3c25Db.png" alt="请添加图片描述" style="zoom: 50%;" />

#### 5.2.2 题目汇总

###### 2016 四

<img src="pic\9bc0c9eDAbjpeg" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\EFcD1Ae232jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

###### 2020 五

<img src="pic\f465d0A6FDjpeg" alt="在这里插入图片描述" style="zoom: 67%;" />

<img src="pic\B22FF786CE.png" alt="请添加图片描述" style="zoom: 67%;" />

###### 2021 八

<img src="pic\9BAF9b9Fb1jpeg" alt="在这里插入图片描述" style="zoom: 67%;" />

<img src="pic\6B4e7a4e6Djpeg" alt="在这里插入图片描述" style="zoom:50%;" />





### 5.3. 两类错误问题 

###### 2023

![在这里插入图片描述](pic/53001.png)

![在这里插入图片描述](pic/53003.png)

![在这里插入图片描述](pic/53002.png)

<img src="pic\4a6d6eD61C.png" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\5f8CFC64Ae.png" alt="请添加图片描述" style="zoom: 50%;" />



{{< alert >}}
==由上题可知，功效函数是固定的，就是在计算第一类错误和第二类错误时的定义域不一样。（第一类错误取原假设的参数值/端点，第二类错误计算取备择假设的参数值/端点）==
{{< /alert >}}

## 专题六 非参数假设检验（第六题）

### 6.1. 皮尔逊卡方检验（拟合优度）

###### 组合数计算

<img src="pic\FD1C7Adcd9.png" alt="在这里插入图片描述" style="zoom: 33%;" />

###### 2015 六

<img src="pic\74C51AA54Bjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\DfFd7fCdC8.png" alt="请添加图片描述" style="zoom: 50%;" />

<img src="pic\A98D7abCDe.png" alt="请添加图片描述" style="zoom: 25%;" />



### 6.2. 卡方独立性检验（列联表）

#### 6.2.1 典型题目

###### 2017 六

<img src="pic\2dCACAFd3ajpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\9D39777C35.png" alt="请添加图片描述" style="zoom: 25%;" />

<img src="pic\C2aB893EE8.png" alt="请添加图片描述" style="zoom: 43%;" />

#### 6.2.2 题目汇总

###### 2016 五

<img src="pic\7BcfEDC25Ajpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\D9016B48f8jpeg" alt="在这里插入图片描述" style="zoom: 80%;" />



###### 2018 六 

<img src="pic\aDeb62C0a7jpeg" alt="在这里插入图片描述" style="zoom: 20%;" />

<img src="pic\583beDA1cdjpeg" alt="在这里插入图片描述" style="zoom:77%;" />

### 6.3. 秩和检验

#### 6.3.1 典型题目

##### 样本数量小于10

###### 2019 六

{{< alert >}}
==当两组数据数量不同时，选少的那个算秩和==
{{< /alert >}}

<img src="pic\0C365589cFjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\bCA2c0dBb7.png" alt="请添加图片描述" style="zoom: 45%;" />

##### 样本数量大于10

###### 2012 六

![在这里插入图片描述](pic/20126zzz.png)

<img src="pic\c345cBD2e2jpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

**算个结论吧，n>10的时候 $R_1$ 服从正态分布， 参数如上所示**

#### 6.3.2 题目汇总

{{< alert icon="fire" cardColor="#e63946" iconColor="#1d3557" textColor="#f1faee" >}}
==注意：课本上的秩和检验表有个4没印刷出来==
{{< /alert >}}

###### 2021 二

<img src="pic\79D08CA7bajpeg" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\e8aA3D6CA9jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

## 专题七 单因素方差分析（第七题）

### 7.1 典型题目

#### 7.1.1. 不给出样本均值方差

###### 2016 七

<img src="pic\3ed3caaCbajpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\cC62F603DC.png" alt="请添加图片描述" style="zoom:45%;" />

<img src="pic\C076AfBC16.png" alt="请添加图片描述" style="zoom: 43%;" />

#### 7.1.2. 给出样本均值方差

###### 2019 七

<img src="pic\7D9cC380Bdjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\7f3E9BcccE.png" alt="请添加图片描述" style="zoom: 25%;" />

<img src="pic\8EB38efBE1.png" alt="请添加图片描述" style="zoom: 25%;" />





### 7.2 题目汇总

#### 7.2.1. 不给出样本均值方差

###### 2015 七

<img src="pic\0bbcDC3ab6jpeg" alt="在这里插入图片描述" style="zoom:33%;" />

<img src="pic\4Bd3bF0e0ajpeg" alt="在这里插入图片描述" style="zoom: 43%;" />

#### 7.2.2. 给出样本均值方差

###### 2017 七

<img src="pic\B263C60c0ajpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\F6EEdfacECjpeg" alt="在这里插入图片描述" style="zoom: 80%;" />



###### 2018 七

<img src="pic\A3A1FFECC2jpeg" alt="在这里插入图片描述" style="zoom:40%;" />

<img src="pic\F0bcCb437fjpeg" alt="在这里插入图片描述" style="zoom: 80%;" />

## 专题八 最小二乘估计（第八题）

### 8.1 基础理论

<img src="pic\caa80c224e.png" alt="请添加图片描述" style="zoom: 45%;" />

<img src="pic\a4a81Bdffd.png" alt="在这里插入图片描述" style="zoom: 80%;" />

<img src="pic\6c1CffE162jpeg" alt="请添加图片描述" style="zoom:67%;" />

<img src="pic\4f93cd1a5D.png" alt="在这里插入图片描述" style="zoom:80%;" />

<img src="pic\dDceeB92f2jpeg" alt="请添加图片描述" style="zoom:50%;" />

![image-20240828183546261](pic/image-20240828183546261.png)

<img src="pic\D56cF1Dc24.png" alt="在这里插入图片描述" style="zoom: 80%;" />

### 8.2. 由样本数据进行最小二乘估计

#### 8.2.1 典型题目

###### 2018 八

<img src="pic\80136Bd2F3jpeg" alt="在这里插入图片描述" style="zoom: 33%;" />

<img src="pic\a8Df1f5224.png" alt="请添加图片描述" style="zoom: 57%;" />

###### 2019 八

<img src="pic\37e2Fbda3fjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\05E530837D.png" alt="请添加图片描述" style="zoom:33%;" />



### 8.3. 给出样本分布进行估计

#### 8.3.1 典型题目

###### 2012 八

<img src="pic\DE141B7DD4jpeg" alt="在这里插入图片描述" style="zoom: 25%;" />

<img src="pic\3EcF60EcdD.png" alt="请添加图片描述" style="zoom: 67%;" />

#### 8.3.2 题目汇总

###### 2015 八

<img src="pic\2865fc2D5Bjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

###### 2017 八

<img src="pic\dCcCaf9Adbjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\44769D3C5bjpeg" alt="在这里插入图片描述" style="zoom: 33%;" />

### 8.4.由最小二乘求分布问题

#### 8.4.1 典型题目

###### 2016 八

<img src="pic\B46FFD164djpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\fDEe026cAB.png" alt="请添加图片描述" style="zoom:33%;" />

<img src="pic\67c9346E03.png" alt="请添加图片描述" style="zoom: 55%;" />

###### 2020 八

<img src="pic\33CAdB6EBbjpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

<img src="pic\07Ce6fe2D4.png" alt="请添加图片描述" style="zoom: 29%;" />

<img src="pic\Ee8ab354CCjpeg" alt="在这里插入图片描述" style="zoom: 45%;" />

#### 8.4.2 题目汇总

###### P238第17题（习题五17题）

<img src="pic\DCB7Dacf58jpeg" alt="在这里插入图片描述" style="zoom: 50%;" />

###### 2021

<img src="pic\f8DE366528jpeg" alt="在这里插入图片描述" style="zoom:67%;" />

<img src="pic\2CA8F9dBEc.png" alt="请添加图片描述" style="zoom:67%;" />

<img src="pic\AF95E25cC3jpeg" alt="在这里插入图片描述" style="zoom: 43%;" />

### 写在最后

本资料为个人整理，难免存在错漏，欢迎联系我进行改正。资料仅供学习参考，禁止用作商业用途。

愿选到这课的人都不挂科🙏。