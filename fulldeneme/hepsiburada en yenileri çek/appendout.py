def append_out(name,string):
   with open('{}.txt'.format(name),'a', encoding="utf-8") as af:
      af.write(string+'\n')