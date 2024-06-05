+++
title = 'EOJ4329 - EOJ Monthly 2021.9 A. Amazing Discovery（公式推导）（矩阵快速幂）'
date = 2021-10-07T16:08:26+08:00
tags=["补档","技术","算法","数学"]

+++

{{< katex >}}

### [题目链接](https://acm.ecnu.edu.cn/problem/4329/)

### 题目大意

给定 a,b,n ，算这个S
$$
S = (a + \sqrt b)^n + (a - \sqrt b)^n
$$

### 解题思路

其实跟[hdu-4565](https://vjudge.net/problem/HDU-4565)是一样的题（思路完全通用，甚至AC代码都差不多）
	
具体的思路就是一个求递推式，再用矩阵快速幂求解递推式的方法。
	
而推递推式的方法，则是在我们已知（或大胆假设）计算可以递推并限制在一定项数之内时，使用类似逆用数学归纳法的方法去构建递推式。

以本题为例，观察式子，由二项式定理可以知道，前后两式只有在$\sqrt{b}$为奇数次方时互为相反数，其他情况相等，这也是最后答案一定是整数的原因。

故，我们可以设
$$
(a + \sqrt b)^n = X_n + \sqrt{b}Y_n
$$
.

$$
(a - \sqrt b)^n = X_n - \sqrt{b}Y_n
$$

则我们可以得到：


$$
(a+\sqrt{b})^n = (a+\sqrt{b})^{n-1} * (a+\sqrt{b})
$$
.
$$
=(X_{n-1} + \sqrt{b}Y_{n-1})*(a+\sqrt{b})
$$
.
$$
= aX_{n-1} + bY_{n-1} + (X_{n-1}+aY_{n-1})\sqrt{b}
$$

.
${(a-\sqrt{b})^n}$同理，待定系数，我们可以得到以下递推式（加减两个式子推出来是一样的）：
$$
X_n = aX_{n-1} + bY_{n-1}
$$
.
$$
Y_n = X_{n-1} + aY_{n-1}
$$



那我们又轻易知 ${X_1 = a,Y_1 = 1}$，就可以用矩阵快速幂求解了，由于加减两式${Y_n}$ 符号相反，最后答案即为 ${2 * X_n}$ 。



### AC代码

```cpp
#include <iostream>
#include <fstream>
#include <cstdio>
#include <cmath>
#include <algorithm>
#include <cstring>
#include <queue>
#include <stack>
#include <vector>
#include <map>
#include <set>
#pragma warning(disable:4996)
#define inr register int
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
using namespace std;
typedef long long ll;
const double pi = acos(-1.0);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 100007;//1e5+7 
const ll mod = 998244353;//1e9+7

struct maritx {
	ll m[5][5];
};

maritx mul(maritx a,maritx b,int n = 2)
{
	maritx res;
	for (int i = 1; i <= n; i++) {
		for (int j = 1; j <= n; j++) {
			res.m[i][j] = 0;
			for (int k = 1; k <= n; k++)
				res.m[i][j] = (res.m[i][j] + a.m[i][k] * b.m[k][j]) % mod;
		}
	}
	return res;
}


maritx ksm(maritx x, ll y,int n = 2)
{
	maritx ans;
	memset(ans.m, 0, sizeof(ans.m));
	ans.m[1][1] = ans.m[2][2] = 1;
	while (y > 0) {
		if (y & 1) {
			ans = mul(ans , x);
		}
		x = mul(x, x);
		y >>= 1;
	}
	return ans;
}

int main()
{
	ios;
	ll a, b, n;
	cin >> a >> b >> n;
	if (n == 1) {
		cout << 2 * a << endl;
		return 0;
	}
	maritx js, cs;
	js.m[1][1] = a;
	js.m[1][2] = b;
	js.m[2][1] = 1ll;
	js.m[2][2] = a;
	js = ksm(js, n - 1ll);
	cs.m[1][1] = a;
	cs.m[2][1] = 1ll;
	cs.m[1][2] = 0ll;
	cs.m[2][2] = 0ll;
	cs = mul(js, cs);
	ll ans = 2ll * cs.m[1][1] % mod;
	cout << ans << endl;
	return 0;
}
```
### 参考博客

https://blog.csdn.net/wust_cyl/article/details/77662720
