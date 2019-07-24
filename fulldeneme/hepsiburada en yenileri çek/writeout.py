def write_out(name,string):
   with open('{}.txt'.format(name),'w', encoding="utf-8") as wf:
      wf.write(string)