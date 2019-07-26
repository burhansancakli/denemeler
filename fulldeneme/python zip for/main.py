yemekler = ['makarna','tost','börek']
fiyatlar = [2,4,10]
for i, (yemek,fiyat) in enumerate(zip(yemekler,fiyatlar)):
   print('count = {}\nyemek = {}\nfiyat = {}\n\n'.format(i,yemek,fiyat))