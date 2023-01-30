---
title: golang中列表转数形结构的方法
---
树形结构数据存储在关系型数据库中一般会以行的形式按以下数据结构保存

```go
type Node struct {
	ID string
	ParentID string
    // 这个字段不入库
	Children []*Node
}
```

有两种方式将其转换成树行结构

## O(n^2)的方法

```go
func SliceToTree2(data []*Node) []*Node {
	var tree []*Node
	for _, v := range data {
		if v.ParentID == "" {
			tree = append(tree, v)
		}
		for _, v2 := range data {
			if v.ID == v2.ParentID {
				v.Children = append(v.Children, v2)
			}
		}
	}
	return tree
}
```

## O(2n)的方法

```go
// SliceToTree O(2n)
func SliceToTree(data []*Node) []*Node {
	var tree []*Node
	m := make(map[string]*Node)
	for _, v := range data {
		m[v.ID] = v
	}
	for _, v := range data {
		if v.ParentID == "" {
			tree = append(tree, v)
		} else {
			m[v.ParentID].Children = append(m[v.ParentID].Children, v)
		}
	}
	return tree
}
```
