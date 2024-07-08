from mymath import mymath

# 삼각형의 넓이 계산
base = 5
height = 8
triangle_area = mymath.triangle_area(base, height)
print(f"밑변이 {base}, 높이가 {height}인 삼각형의 넓이는 {triangle_area}입니다.")

# 원의 넓이 계산
radius = 4
circle_area = mymath.circle_area(radius)
print(f"반지름이 {radius}인 원의 넓이는 {circle_area:.2f}입니다.")

# 직육면체의 넓이 계산
length = 3
width = 5
height = 7
cuboid_area = mymath.cuboid_area(length, width, height)
print(f"길이가 {length}, 너비가 {width}, 높이가 {height}인 직육면체의 넓이는 {cuboid_area}입니다.")
