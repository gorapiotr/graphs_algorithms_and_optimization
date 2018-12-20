import unittest

from KdTree import KdTree
from MathFunc import MathFunc


class TestKdTree(unittest.TestCase):

    def test_kd_tree_s_par_is_one_point(self):
        s = [[1, 1]]

        self.assertEqual(s, KdTree.kd_build(s))

    def test_get_point_vector_function(self):
        s = [
            [1, 1],
            [2, 2],
            [3, 2],
            [4, 3]
        ]

        x_points, y_points = KdTree.get_points_vector(s)

        self.assertEqual([1, 2, 3, 4], x_points)
        self.assertEqual([1, 2, 2, 3], y_points)

    def test_divide_array_function(self):
        s = [
            [1, 1],
            [2, 2],
            [3, 2],
            [4, 3]
        ]

        x_points, y_points = KdTree.get_points_vector(s)

        s1, s2 = KdTree.divide_array(s, MathFunc.median(x_points), 'x')

        self.assertEqual([[1, 1], [2, 2]], s1)
        self.assertEqual([[3, 2], [4, 3]], s2)

        s1, s2 = KdTree.divide_array(s, MathFunc.median(x_points), 'y')

        self.assertEqual([[1, 1], [2, 2], [3, 2]], s1)
        self.assertEqual([[4, 3]], s2)

    def test_run_alg(self):
        s = [
            [1, 1],
            [2, 2],
            [3, 2],
            [4, 3]
        ]

        node = KdTree.kd_build(s)

        KdTree.display_tree(node)

    def test_run_alg1(self):
        s = [
            [1, 1],
            [2, 2],
            [3, 6],
            [4, 3],
            [5, 7]
        ]

        node = KdTree.kd_build(s)

        KdTree.display_tree(node)


if __name__ == '__main__':
    unittest.main()
