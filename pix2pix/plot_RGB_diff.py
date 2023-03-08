import pandas as pd
import matplotlib.pyplot as plt

df_original = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\original_test.csv')
df_generated = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\generated_test.csv')


df = pd.DataFrame(columns=['R_diff', 'G_diff', 'B_diff', 'AVG_diff'])

df['R_diff'] = abs(df_original['R-original'] - df_generated['R-generated'])
df['G_diff'] = abs(df_original['G-original'] - df_generated['G-generated'])
df['B_diff'] = abs(df_original['B-original'] - df_generated['B-generated'])

df['AVG_diff'] = (df['R_diff'] + df['G_diff'] + df['B_diff']) / 3
df = df.round().astype({'AVG_diff' : "int"})

df.to_csv("RGB_diff.csv", index=False, header=['R_diff', 'G_diff', 'B_diff', 'AVG_diff'])

df['AVG_diff'].plot(color='Red')

plt.title("Absolute average error in RGB values between original and generated image")
plt.ylabel("Error value")
plt.xlabel("Pixel number")
plt.legend(['AVG_diff'])

#Error less than 13 i.e. 5% margin of 0-255
margin = 13
count_RGB = len(df[df['AVG_diff']<margin])
# count_R = len(df[df['R_diff']<margin])
# count_G = len(df[df['G_diff']<margin])
# count_B = len(df[df['B_diff']<margin])

print('count_RGB')
print(count_RGB)
# print('count_R\tcount_G\tcount_B')
# print(count_R, count_G, count_B)

acc_RGB = count_RGB/2601
# acc_R = count_R/2601
# acc_G = count_G/2601
# acc_B = count_B/2601

print('acc_RGB')
print(f"{acc_RGB:{0.3}}")
# print('acc_R\tacc_G\tacc_B')
# print(f"{acc_R:{0.3}} \t {acc_G:{0.3}} \t {acc_B:{0.3}}")

# print("Average accuracy")
# print(f"{(acc_R + acc_G + acc_B)/3:{0.3}}")

plt.show()