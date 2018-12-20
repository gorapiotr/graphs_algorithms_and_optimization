import unittest
import copy
import random

from Selection import selection


class SelectionTest(unittest.TestCase):

    def test_lecture_list(self):
        a = [3, 50, 60, 63, 11, 4, 5, 85, 70, 99, 61, 101, 62, 19, 22, 10, 30, 1, 100, 9, 82, 21, 40, 71, 20, 80, 81,
             79];
        b = copy.deepcopy(a)
        b.sort()

        i = 1
        while i < len(a) - 1:
            print('Iteration: ', i, 'Selection alg :', selection(a, i), 'Sorted list: ', b[i - 1])
            self.assertEqual(selection(a, i), b[i - 1])
            i = i + 1

    def test_example_list(self):
        a = random.sample(range(1, 100), 90)

        b = copy.deepcopy(a)
        b.sort()

        i = 1
        while i < len(a) - 1:
            print('Iteration: ', i, 'Selection alg :', selection(a, i), 'Sorted list: ', b[i - 1])
            self.assertEqual(selection(a, i), b[i - 1])
            i = i + 1


if __name__ == '__main__':
    unittest.main()
