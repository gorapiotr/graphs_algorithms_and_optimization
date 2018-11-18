from MathFunc import MathFunc
from Node import Node


class KdTree:
    """""
    BuildKdTree(S, d)
    Wejście. Zbiór punktów S i aktualna głębokość d. Wyjście. Korzeń kd-drzewa przechowującego zbiór S.
    1. if S zawiera tylko jeden punkt
    2. then return liść pamiętający ten punkt
    3. else if d jest parzyste
    4. then Podziel S na dwa zbiory S1 i S2 pionową prostą l przechodzącą przez medianę
    then współrzędnych x punktów z S, gdzie S1 zawiera punkty na lewo lub na prostej l,
    then a S2 zawiera punkty na prawo od prostej l. 5. else Podziel S na dwa zbiory S1 i S2 poziomą prostą l przechodzącą przez medianę
    then współrzędnych y punktów z S, gdzie S1 zawiera punkty poniżej lub na prostej l,
    then a S2 zawiera punkty powyżej prostej l. 6. else lewy-syn(v) := BuildKdTree(S1, d + 1);
    7. else prawy-syn(v) := BuildKdTree(S2, d + 1);
    8. else Stwórz wierzchołek v pamietający prostą l, uczyń vlewy i vprawy jego lewym
    else i prawym dzieckiem, odpowiednio.
    9. return v.
    """""

    def __init__(self):
        pass

    @staticmethod
    def kd_build(s, d=1):

        if len(s) == 1:
            return s

        if len(s) % 2 == 0:
            x_points, y_points = KdTree.get_points_vector(s)
            x_median = MathFunc.median(x_points)
            straight = {"y": x_median}

            s1, s2 = KdTree.divide_array(s, x_median, 'x')
        else:
            x_points, y_points = KdTree.get_points_vector(s)
            y_median = MathFunc.median(y_points)
            straight = {"x": y_median}

            s1, s2 = KdTree.divide_array(s, y_median, 'y')

        left_son = KdTree.kd_build(s1, d + 1)
        right_son = KdTree.kd_build(s2, d + 1)

        return Node(left_son, right_son, straight, d)

    @staticmethod
    def get_points_vector(s):
        x_points = []
        y_points = []
        for point in s:
            x_points.append(point[0])
            y_points.append(point[1])
        return x_points, y_points

    @staticmethod
    def divide_array(s, median, x_y):
        s1 = []
        s2 = []
        if x_y == 'x':
            for point in s:
                if point[0] >= median:
                    s1.append(point)
                else:
                    s2.append(point)
        if x_y == 'y':
            for point in s:
                if point[1] >= median:
                    s1.append(point)
                else:
                    s2.append(point)
        return s1, s2

    @staticmethod
    def display_tree(node):

        if node.d == 1:
            print(vars(node))

        if isinstance(node.right_child, Node):
            print(vars(node.right_child))
            __class__.display_tree(node.right_child)
        else:
            print(node.right_child)

        if isinstance(node.left_child, Node):
            print(vars(node.left_child))
            __class__.display_tree(node.left_child)
        else:
            print(node.left_child)
