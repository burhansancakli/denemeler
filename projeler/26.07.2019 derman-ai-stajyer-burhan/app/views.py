# -*- coding: utf-8 -*-

from app import app
from flask import request, Response

import json
from .helper import read_base64_image
from .helper import gen_prediction
from .helper import gen_probabilities


@app.route('/')
@app.route('/index')
def index():
    return "Derman Yakinda"


@app.route('/predict', methods=['POST'])
def predict():
    data = json.loads(request.data)
    base64_str = data.get('image')
    rgb_image = read_base64_image(base64_str)

    probas = gen_probabilities(rgb_image)
    klass, score = gen_prediction(probas)

    response = {'class': klass, 'score': score}
    response = json.dumps(response)
    return Response(response=response)


@app.route('/tani', methods=['POST'])
def tani():
    data = json.loads(request.data)
    base64_str = data.get('image')
    rgb_image = read_base64_image(base64_str)

    probas = gen_probabilities(rgb_image)
    klass, score = gen_prediction(probas)

    response = [{'id': 1, 'name': klass, 'score': score, 'detail': 'Hastalık Detayları\nHastalık Detayları\n',
                 'relatedImages': [
                     "https://www.mutluvesaglikli.com/wp-content/uploads/2018/07/bazal-cilt-kanseri-300x225.jpg"
                 ]},
                {'id': 2, 'name': klass, 'score': score, 'detail': 'Hastalık Detayları\nHastalık Detayları\n',
                 'relatedImages': [
                     "https://www.mutluvesaglikli.com/wp-content/uploads/2018/07/bazal-cilt-kanseri-300x225.jpg"
                 ]}]

    response = json.dumps(response)
    return Response(response=response)
