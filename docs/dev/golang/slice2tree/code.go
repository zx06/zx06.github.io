package slice2tree


type Node struct {
	ID string
	ParentID string
	Children []*Node
}

// SliceToTree2 O(n^2)
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