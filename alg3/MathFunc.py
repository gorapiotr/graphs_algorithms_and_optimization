class MathFunc(object):

    @staticmethod
    def median(data):
        """
         median([1, 3, 5])
        3
         median([1, 3, 5, 7])
        4.0
        """

        MathFunc.bubble_sort(data)

        n = len(data)
        if n == 0:
            return None
        if n % 2 == 1:
            return data[n // 2]
        else:
            i = n // 2
            return (data[i - 1] + data[i]) / 2

    @staticmethod
    def bubble_sort(list):

        # Swap the elements to arrange in order
        for iter_num in range(len(list) - 1, 0, -1):
            for idx in range(iter_num):
                if list[idx] > list[idx + 1]:
                    temp = list[idx]
                    list[idx] = list[idx + 1]
                    list[idx + 1] = temp