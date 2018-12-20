import unittest
from DetectMax import DetectMax


class TestDetectMax(unittest.TestCase):
    def test_sort_function(self):
        s = [
            [6, 4],
            [1, 1],
            [1, 2],
            [4, 3],
            [3, 2],
        ]

        s_sorted = [
            [1, 1],
            [1, 2],
            [3, 2],
            [4, 3],
            [6, 4]
        ]

        sorted_points = DetectMax.sort_by_x(s)

        self.assertEqual(sorted_points, s_sorted)

    def test_detect_max(self):
        s = [
            [1, 1],
            [3, 2],
            [2, 5],
            [5, 2],
            [5, 6],
            [4, 4],
            [7, 4],
            [5, 4]
        ]

        max_points = DetectMax.detect_maximum(s)

        good_s = [
            [1, 1],
            [2, 5],
            [3, 2],
            [5, 2],
            [5, 6],
            [7, 4]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_detect_max1(self):
        s = [
            [2, 2],
            [2, 4],
            [4, 1],
            [5, 3],
            [5, 4],
            [4, 6],
            [7, 1],
            [6, 3],
            [7, 4],
            [7, 6],
            [9, 4]
        ]

        max_points = DetectMax.detect_maximum(s)

        good_s = [
            [2, 2],
            [2, 4],
            [4, 1],
            [4, 6],
            [7, 1],
            [7, 6],
            [9, 4]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_detect_max2(self):
        s = [
            [3, 2],
            [4, 3],
            [5, 3],
            [6, 2],
            [7, 4],
            [4, 5],
            [5, 4],
            [2, 3]
        ]

        max_points = DetectMax.detect_maximum(s)

        good_s = [
            [2, 3],
            [3, 2],
            [6, 2],
            [7, 4],
            [4, 5]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_detect_max3(self):
        s = [
            [2, 3],
            [2, 2],
            [4, 3],
            [4, 4],
            [5, 3],
            [6, 1],
            [8, 3],
            [3, 5]
        ]

        max_points = DetectMax.detect_maximum(s)

        good_s = [
            [2, 3],
            [2, 2],
            [6, 1],
            [8, 3],
            [3, 5],
            [4, 4]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_zad_1_1(self):
        s = [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4]
        ]

        max_points = DetectMax.detect_maximum(s)

        print(max_points)

        good_s = [
            [0, 0],
            [1, 1],
            [2, 2],
            [3, 3],
            [4, 4]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_zad_1_2(self):
        s = [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5]
        ]

        max_points = DetectMax.detect_maximum(s)

        print(max_points)

        good_s = [
            [0, 0],
            [0, 1],
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5]
        ]
        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))

    def test_zad_1_3(self):
        s = [
            [1, 2],
            [2, 2],
            [3, 2],
            [0, 1],
            [1, 1],
            [2, 1],
            [3, 1],
            [4, 1],
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [0, -1],
            [1, -1],
            [2, -1],
            [3, -1],
            [4, -1],
            [1, -2],
            [2, -2],
            [3, -2]
        ]

        max_points = DetectMax.detect_maximum(s)

        print(max_points)

        good_s = [
            [0, -1],
            [0, 0],
            [0, 1],
            [1, -2],
            [1, 2],
            [2, -2],
            [2, 2],
            [3, -2],
            [3, 2],
            [4, 1],
            [4, 0],
            [4, -1]
        ]

        self.assertEqual(DetectMax.sort_by_x(max_points), DetectMax.sort_by_x(good_s))


if __name__ == '__main__':
    unittest.main()
