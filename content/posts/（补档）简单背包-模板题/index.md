+++
title = '（补档）简单背包 模板题'
date = 2020-11-28T14:54:50+08:00
tags=["补档","算法","动态规划"]

+++

# 背包-模板题
参考：[背包九讲——全篇详细理解与代码实现](https://blog.csdn.net/yandaoqiusheng/article/details/84782655)

## 1.  01背包
例题[采药](https://www.luogu.com.cn/problem/P1048)
```cpp
#include <bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
using namespace std;
typedef long long ll;
const int maxn = 10000007;
const ll inf = 0x3f3f3f3f;

ll v[maxn], w[maxn], dp[maxn];
ll n, m;

//P1048 01背包
int main()
{
	ios;
	cin >> m >> n;
	for (int i = 1; i <= n; i++) {
		cin >> w[i] >> v[i];
	}
	for (int i = 1; i <= n; i++) {
		for (int j = m; j >= w[i]; j--) {
			dp[j] = max(dp[j], dp[j - w[i]] + v[i]);
		}
	}
	cout << dp[m] << endl;
	return 0; 
}


```

## 2.完全背包
例题：[P1853 投资的最大效益](https://www.luogu.com.cn/problem/P1853)

```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 10000007;//1e5+7 
const ll mod = 1000000007;//1e9+7

ll dp[maxn];
ll w[maxn];
ll v[maxn];

int main()
{
	ll s;
	int n,d;
	cin>>s>>n>>d;
	for(int i = 1;i<=d;i++){
		cin>>w[i]>>v[i];
	} 
	ll nw = s,sx;
	for(int ye = 1;ye<=n;ye++){
		sx = nw;
		for(int i = 1;i<=d;i++){
			for(int j = w[i];j<=sx;j++){
				dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
			}
		}
		nw += dp[sx];
	} 
	cout<<nw<<endl;
	return 0;
}
```
例题2：[P1616 疯狂的采药](https://www.luogu.com.cn/problem/P1616)
		先物品后容积

```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 10000007;//1e5+7 
const ll mod = 1000000007;//1e9+7

ll dp[maxn];

int main()
{
	ll n,m;
	cin>>n>>m;
	for(ll i = 1,w,v;i<=m;i++){
		cin>>w>>v;
		for(ll j = w;j<=n;j++){
			dp[j] = max(dp[j],dp[j - w] + v);
		}
	}
	cout<<dp[n]<<endl;
	return 0;
}
```

## 3.多重背包

例题：[P1776 宝物筛选](https://www.luogu.com.cn/problem/P1776)
### 转化为01背包问题求解
既然01背包问题是最基本的背包问题，那么我们可以考虑把完全背包问题转化为01背包问题来解。思路：将多种物品用二进制的思想合并。

```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 10000007;//1e5+7 
const ll mod = 1000000007;//1e9+7

ll dp[maxn];
ll w[maxn];
ll v[maxn];

int main()
{
	ll s;
	int n,d;
	cin>>s>>n>>d;
	for(int i = 1;i<=d;i++){
		cin>>w[i]>>v[i];
	} 
	ll nw = s,sx;
	for(int ye = 1;ye<=n;ye++){
		sx = nw;
		for(int i = 1;i<=d;i++){
			for(int j = w[i];j<=sx;j++){
				dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
			}
		}
		nw += dp[sx];
	} 
	cout<<nw<<endl;
	return 0;
}

"
```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 100007;//1e5+7 
const ll mod = 1000000007;//1e9+7

ll w[maxn];
ll v[maxn];
ll tw[maxn];
ll tv[maxn];
ll s[maxn];

ll ksm(ll x,ll y)
{
	ll res = 1;
	while(y > 0){
		if(y&1){
			res = res * x;
		}
		y >>= 1;
		x = x * x; 
	}
	return res;
}


ll dp[maxn];

int main()
{
	int n;
	ll W;
	cin>>n>>W;
	for(int i = 1;i<=n;i++){
		cin>>tv[i]>>tw[i]>>s[i];
	} 
	int m = 0;
	for(int i = 1;i<=n;i++){
		ll mxs = W / s[i];
		ll zs = 0;
		while(s[i] > 0){
			ll nw = ksm(2,zs);
			if(s[i] >= nw){
				s[i] -= nw;
				w[++m] = tw[i] * nw;
				v[m] = tv[i] * nw;
			}
			else{
				w[++m] = tw[i] * s[i];
				v[m] = tv[i] * s[i];
				s[i] = 0;
			}
			zs++;
		}
	} 
	for(int i = 1;i<=m;i++){
		for(int j = W;j>=w[i];j--){
			dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
		}
	}
	cout<<dp[W]<<endl;
	
	return 0;
}

```

## 4.混合背包
例题：[P1833 樱花](https://www.luogu.com.cn/problem/P1833)
分类讨论 + 降维打击：完全型物品完全解法，01型物品、多重型物品，降维成01背包解决

```cpp
#include<bits/stdc++.h>
#define ios::sync_with_stdio(false);cin.tie(0);cout.tie(0)
using namespace std;
const int maxn = 1000007;

int dp[maxn];
bool inf[maxn];
int w[maxn];
int v[maxn];

int main()
{
	int sh,sm,eh,em,n,m = 0;
	scanf("%d:%d %d:%d %d",&sh,&sm,&eh,&em,&n);
	int T = (eh - sh) * 60 + em - sm ;
	//cout<<T<<endl; 
	memset(dp,0,sizeof(dp));
	memset(inf,0,sizeof(inf));
	for(int i = 1,tw,tv,s;i<=n;i++){
		cin>>tw>>tv>>s;
		if(s == 0){
			w[++m] = tw;
			v[m] = tv;
			inf[m] = 1;
		}
		else{
			for(int j = 1;j<=s;j<<=1){
				w[++m] = tw * j;
				v[m] = tv * j;
				s -= j;
			}
			if(s){
				w[++m] = tw * s;
				v[m] = tv * s;
			}
		}
	}
	for(int i = 1;i<=m;i++){
		if(inf[i]){
			for(int j = w[i];j<=T;j++){
				dp[j] = max(dp[j],dp[j - w[i]] + v[i]); 
			} 
		}
		else{
			for(int j = T;j>=w[i];j--){
				dp[j] = max(dp[j],dp[j - w[i]] + v[i]);
			}
		}
	}
	cout<<dp[T]<<endl;
	return 0;
}
```

## 5.二维费用背包
例题：[P1507 NASA的食物计划](https://www.luogu.com.cn/problem/P1507)
在普通背包的基础上多加了一维费用而已
```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 1007;//1e5+7 
const ll mod = 1000000007;//1e9+7

int dp[maxn][maxn];

int main()
{
	int T,W,n;
	cin>>T>>W;
	cin>>n;
	for(int i = 1,t,w,v;i<=n;i++){
		cin>>t>>w>>v;
		for(int j = W;j>=w;j--){
			for(int k = T;k>=t;k--){
				dp[j][k] = max(dp[j][k],dp[j - w][k - t] + v);
			}
		}
	}
	cout<<dp[W][T]<<endl;
	return 0;
}
```

## 6.分组背包
例题：[P1757 通天之分组背包](https://www.luogu.com.cn/problem/P1757#sub)

以前的01物品变成了一个个的物品组，做法别无二致，在循环的内部多一重对组内物品的枚举即可
```
for (所有的组k)
    for (int j = V; j >= 0; j--)
        for (所有属于组k的i)
            f[j] = max{f[j], f[j - w[i]] + v[i]}
```
```cpp
#include<bits/stdc++.h>
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
#define inr register int 
using namespace std;
typedef long long ll;
const double pi=acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 100007;//1e5+7 
const ll mod = 1000000007;//1e9+7

int dp[maxn];
struct node{
	int w,v;
};

vector<node>G[maxn];

int main()
{
	int n,m,mx = 0;
	cin>>m>>n;
	for(int i = 1,a,b,c;i<=n;i++){
		cin>>a>>b>>c;
		node nd;
		nd.w = a;
		nd.v = b;
		mx = max(c,mx);
		G[c].push_back(nd);
	}
	
	for(int i = 0;i<=mx;i++){
		if(G[i].size()){
			for(int j = m;j>=0;j--){
				for(int k = 0;k<=G[i].size();k++){
					if(G[i][k].w <= j){
						dp[j] = max(dp[j],dp[j - G[i][k].w] + G[i][k].v);
					}
				}
			}			
		}
	}
	cout<<dp[m]<<endl;
	return 0;
}
```

## 7.有依赖的背包
例题：[P1064 金明的预算方案](https://www.luogu.com.cn/problem/P1064)
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
#define ios ios::sync_with_stdio(false);cin.tie(0);cout.tie(0);
#define debug(a) cout << #a << " " << a << endl
using namespace std;
typedef long long ll;
const double pi = acos(-1);
const double eps = 1e-8;
const int inf = 0x3f3f3f3f;
const int maxn = 67;
const int maxm = 50007;//5e4+7 
const ll mod = 1000000007;//1e9+7


int read()
{
	int res = 0, ch, flag = 0;

	if ((ch = getchar()) == '-')
		flag = 1;
	else if (ch >= '0' && ch <= '9')
		res = ch - '0';
	while ((ch = getchar()) >= '0' && ch <= '9')
		res = res * 10 + ch - '0';
	return flag ? -res : res;
}

int n, m;

struct node {
	int w, v;
};

vector<node>G[maxn];
node zj[maxn];
int pdp[maxn][maxm];
int dp[maxm];
bool pd[maxn];


int main()
{
	n = read();
	m = read();
	n /= 10;
	for (int i = 1,q, w, v; i <= m; i++) {
		w = read();v = read();q = read();
		w /= 10;
		if (q) {
			G[q].push_back(node{ w,v * w });
		}
		else {
			pd[i] = 1;
			zj[i] = node{ w,v * w };
		}
	}
	for (int i = 1; i <= m; i++) {
		if (pd[i]) {
			for (int j = zj[i].w; j <= n; j++) {
				pdp[i][j] = zj[i].v;
			}
			for (int j = 0; j < G[i].size(); j++) {
				for (int k = n; k >= G[i][j].w + zj[i].w; k--) {
					pdp[i][k] = max(pdp[i][k], pdp[i][k - G[i][j].w] + G[i][j].v);
				}
			}
		}
	}
	for (int i = 1; i <= m; i++) {
		if (pd[i]) {
			for (int j = n; j >= 0;j--) {
				for (int k = zj[i].w; k <= j; k++) {
					dp[j] = max(dp[j], dp[j - k] + pdp[i][k]);
				 }
			}
		}
	}
	printf("%d\n",dp[n] * 10);
	return 0;
}
```
## 总结
总结：不论背包问题多么复杂，皆可向01背包的思路靠近
