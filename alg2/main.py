import copy
from Selection import *

A = [3, 50, 60, 63, 11, 4, 5, 85, 70, 99, 61, 101, 62, 19, 22, 10, 30, 1, 100, 9, 82, 21, 40, 71, 20, 80, 81, 79];

B = copy.deepcopy(A)
B.sort()

i = 1
while i < len(A) - 1:
    print(selection(A, i), B[i - 1])
    i = i + 1
