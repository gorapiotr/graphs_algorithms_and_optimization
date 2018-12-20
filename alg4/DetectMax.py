import numpy as np


class DetectMax:
    def __init__(self):
        pass

    @staticmethod
    def detect_maximum(points):
        points = DetectMax.sort_by_x(points)

        d = []

        d.append(points[0])
        y_max = points[0][1]
        y_min = points[0][0]

        for i in range(1, len(points) - 1):

            if points[i][1] > y_max:
                d.append(points[i])
                y_max = points[i][1]
            if points[i][1] < y_min:
                d.append(points[i])
                y_min = points[i][1]
            if points[i][1] == y_min:
                if points[i] not in d:
                    if points[i][1] is not points[0][1] and points[i][1] is not points[-1][1]:
                        d.append(points[i])
                y_min = points[i][1]
            if points[i][1] == y_max:
                if points[i] not in d:
                    if points[i][1] is not points[0][1] and points[i][1] is not points[-1][1]:
                        if points[i] != points[0] and points[i] != points[-1]:
                            d.append(points[i])
                y_max = points[i][1]

        d.append(points[-1])
        y_max = points[-1][1]
        y_min = points[-1][1]

        for i in reversed(range(1, len(points) - 1)):

            if points[i][1] > y_max:
                if points[i] not in d:
                    d.append(points[i])
                y_max = points[i][1]
            if points[i][1] < y_min:
                if points[i] not in d:
                    d.append(points[i])
                y_min = points[i][1]
            if points[i][1] == y_min:
                if points[i] not in d:
                    if points[i][1] is not points[0][1] and points[i][1] is not points[-1][1]:
                        d.append(points[i])
                y_min = points[i][1]
            if points[i][1] == y_max:
                if points[i] not in d:
                    if points[i][1] is not points[0][1] and points[i][1] is not points[-1][1]:
                        if points[i] != points[0] and points[i] != points[-1]:
                            d.append(points[i])
                y_max = points[i][1]

        return d

    @staticmethod
    def sort_by_x(points):
        return sorted(points, key=lambda k: [k[0], k[1]])

    @staticmethod
    def get_points_vector(s):
        x_points = []
        y_points = []
        for point in s:
            x_points.append(point[0])
            y_points.append(point[1])
        return x_points, y_points

