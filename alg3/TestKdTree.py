import unittest

from KdTree import KdTree
from MathFunc import MathFunc

from Node import Node


class TestKdTree(unittest.TestCase):

    def test_kd_tree_s_par_is_one_point(self):
        s = [[1, 1]]

        self.assertEqual(s, KdTree.kd_build(s))

    def test_get_point_vector_function(self):
        s = [
            [1, 1],
            [1, 2],
            [3, 2],
            [4, 3]
        ]

        x_points, y_points = KdTree.get_points_vector(s)

        self.assertEqual([1, 1, 3, 4], x_points)
        self.assertEqual([1, 2, 2, 3], y_points)

    def test_divide_array_function(self):
        s = [
            [1, 1],
            [1, 2],
            [3, 2],
            [4, 3]
        ]

        x_points, y_points = KdTree.get_points_vector(s)

        s1, s2 = KdTree.divide_array(s, MathFunc.median(x_points), 'x')

        self.assertEqual([[1, 1], [1, 2]], s1)
        self.assertEqual([[3, 2], [4, 3]], s2)

        s1, s2 = KdTree.divide_array(s, MathFunc.median(x_points), 'y')

        self.assertEqual([[1, 1], [1, 2], [3, 2]], s1)
        self.assertEqual([[4, 3]], s2)

    def test_run_alg(self):
        s = [
            [1, 1],
            [2, 2],
            [3, 2],
            [4, 3]
        ]

        node = KdTree.kd_build(s)

        TestKdTree.displayTree(node)

    @staticmethod
    def displayTree(node):

        if node.d == 1:
            print(node.straight)

        if isinstance(node.right_child, Node):
            print(vars(node.right_child))
            TestKdTree.displayTree(node.right_child)
        else:
            print(node.right_child)

        if isinstance(node.left_child, Node):
            print(vars(node.left_child))
            TestKdTree.displayTree(node.left_child)
        else:
            print(node.left_child)


if __name__ == '__main__':
    unittest.main()
