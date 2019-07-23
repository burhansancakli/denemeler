from needstoerror import needs_to_error
names_list=['a','b','c','ç','d','e','f','g','ğ','h','ı','i']
to_delete=[]
for count,character in enumerate(names_list):
   if character=='ç' or character=='ğ' or character=='ı':
      to_delete.append(count)
to_delete.sort(reverse=True)
for i in to_delete:
   try:
      needs_to_error(2,'a')
   except:
      continue
   del names_list[i]
print(names_list)