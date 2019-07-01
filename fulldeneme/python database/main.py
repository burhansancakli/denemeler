import sqlite3

conn=sqlite3.connect('employee.db')

c=conn.cursor()

# c.execute("""CREATE TABLE employees (
#             first text,
#             last text,
#             pay integer
#             )""")

c.execute("INSERT INTO employees VALUES('Mary','Schafer',70000)")

#c.execute("SELECT * FROM employees WHERE LOWER(last)='schafer'")
#c.fetchone() #it will get the next row
#c.fetchmany(5) # 5 tane row döndürür liste olarak
#print(c.fetchall()) #tüm rowları çevirir

conn.commit()
conn.close()