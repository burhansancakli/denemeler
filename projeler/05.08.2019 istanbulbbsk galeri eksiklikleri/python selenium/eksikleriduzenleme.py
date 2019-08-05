import os

with open('eksiklerduzensiz.txt', 'r') as text_text: 
    text = text_text.read() 
    lines=text.split('\n')
    for line in lines:
        image=line.split(':')[0]
        print(image)