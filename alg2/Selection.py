import numpy as np
import statistics
import math


def chunks(l, n):
    for i in range(0, len(l), n):
        yield l[i:i + n]


def selection(A, k):
    if len(A) <= 10:
        A.sort()
        return A[k - 1]
    else:
        m = []
        b = list(chunks(A, 5))
        for a in b:
            a.sort()
            m.append(statistics.median(a))
        z = selection(m, math.floor(len(m) / 2))

        b_bigger = []
        b_smaller = []
        b_equal = []

        for a in A:
            if a > z:
                b_bigger.append(a)
            elif a == z:
                b_equal.append(a)
            else:
                b_smaller.append(a)

        if len(b_smaller) >= k:
            return selection(b_smaller, k)
        elif len(b_smaller) + len(b_equal) == k:
            return z
        else:
            return selection(b_bigger, k - len(b_smaller) - len(b_equal))