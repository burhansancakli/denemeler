def tableEdit(table,row,column,char,isPlayer):  
   column*=2
   if isPlayer and table[row][column]!='-':
      print('ORASI ZATEN DOLU')
      return table
   newStringList=[]
   for countRow,string in enumerate(table):
      newString=''
      for countColumn,character in enumerate(table[countRow]):
         if row==countRow and column==countColumn:
            newString+=char
         else:
            newString+=character
      newStringList.append(newString)
   return newStringList

def tableControl(table):
   for i in range (3):
      if table[0][i*2] !='-' and table[0][i*2] !='+' and table[0][i*2]==table[1][i*2] and table[0][i*2]==table[2][i*2]: #vertical control
         table=tableEdit(table,0,i,'+',False)
         table=tableEdit(table,1,i,'+',False)
         table=tableEdit(table,2,i,'+',False)
      elif table[i][0]!='-' and table[i][0]!='+' and table[i][0]==table[i][2] and table[i][0]==table[i][4]: #horizontal control
         table=tableEdit(table,i,0,'+',False)
         table=tableEdit(table,i,1,'+',False)
         table=tableEdit(table,i,2,'+',False)
   if table[0][0] !='-' and table[0][0] !='+' and table[0][0] == table[1][2] and table[0][0] == table[2][4]: #left to bottom diagonal control
      table=tableEdit(table,0,0,'+',False)
      table=tableEdit(table,1,1,'+',False)
      table=tableEdit(table,2,2,'+',False)
   elif table[0][4] !='-' and table[0][4] !='+' and table[0][4] == table[1][2] and table[0][4] == table[2][0]: #right to bottom diagonal control
      table=tableEdit(table,0,2,'+',False)
      table=tableEdit(table,1,1,'+',False)
      table=tableEdit(table,2,0,'+',False)
   return table
def tableDraw(table):
   print('   1 2 3')
   for count,string in enumerate(table):
      if count==0:print('a ',string)
      elif count==1:print('b ',string)
      else: print('c  '+string)
      
table=['- - -','- - -','- - -']
endGame=False
while endGame==False:
   tableDraw(table)
   char=''
   while char!='x' and char!='X' and char!='o' and char!='O':
      print("X veya O üzerinden herhangi bir karakteri giriniz!")
      char=input()
   char=char.upper()
   row=''
   while row!='a' and row!='A' and row!='b' and row!='B' and row!='c' and row!='C':
      print("'{}' karakterini hangi sütuna kodlamak istersiniz? (örneğin 'A' sütunu için 'A' giriniz)".format(char))
      row=input()
   row=row.upper()
   column=-1
   while not isinstance(column,int) or column>3 or column<1:
      print("Peki '{}' karakterini '{}' sütunu üzerinden hangi satıra kodlamak istersiniz? (örneğin 1'inci satır için '1' giriniz)".format(char,row))
      column=int(input())
   if row=='A':row=0
   elif row=='B':row=1
   elif row=='C':row=2
   table=tableEdit(table,row,column-1,char,True)
   newTable=tableControl(table)
   if newTable!=table:
      endGame=True 
      table=newTable
tableDraw(table)