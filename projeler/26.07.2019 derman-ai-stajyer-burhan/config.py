import os
os.path.dirname(os.path.abspath(__file__))
MODEL_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "trained_models/model_best.pth.tar")

try:
    from local_settings import *
except ImportError:
    pass
