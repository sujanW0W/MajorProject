import pandas as pd
import matplotlib.pyplot as plt

df_original = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\original_average.csv')
df_generated = pd.read_csv('C:\\Users\\Shady\\Desktop\\pix2pix\\generated_average.csv')

ax = df_original.plot(figsize=(20,10))
df_generated.plot(ax=ax)

plt.show()
