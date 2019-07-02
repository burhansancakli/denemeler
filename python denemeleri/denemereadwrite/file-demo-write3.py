# File Objects

with open('mountain.jpeg','rb') as rf:
   with open('very mountain.jpeg','wb') as wf:
      chunk_size = 512
      rf_chunk=rf.read(chunk_size)
      while len(rf_chunk)>0:
         wf.write(rf_chunk)
         rf_chunk=rf.read(chunk_size)