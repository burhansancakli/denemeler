import pandas as pd
import quandl

df=quandl.get("BATS/EDGA_LEGH", authtoken="H8Syroiu6j5ycbeYzzsM")
print(df)