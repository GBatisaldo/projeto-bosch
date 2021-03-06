from flask import Flask, request, jsonify, Response
from flask_restful import Resource, Api
from flask_cors import CORS
from sqlalchemy import create_engine
from json import dumps

db_connect = create_engine('sqlite:///banco.db')
app = Flask(__name__)
api = Api(app)
CORS(app)


class Produto(Resource):
    def get(self):
        conn = db_connect.connect()
        query = conn.execute("select * from produto")
        result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(result)

    def post(self):
        conn = db_connect.connect()
        name = request.json['nomeProduto']
        quantidade = request.json['quantidade']
        peso = request.json['peso']
        local = request.json['local']
        imageUrl = request.json['imageUrl']

        conn.execute(
            "insert into produto (nomeProduto, quantidade, peso, local, imageUrl) values('{0}','{1}','{2}','{3}','{4}')"
                .format(name, quantidade, peso, local, imageUrl))

        query = conn.execute('select * from produto order by id desc limit 1')
        result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]

        return jsonify(result)

    def put(self):
        conn = db_connect.connect()
        id = request.json['id']
        name = request.json['name']
        email = request.json['email']

        conn.execute("update user set name ='" + str(name) +
                     "', email ='" + str(email) + "'  where id =%d " % int(id))

        query = conn.execute("select * from user where id=%d " % int(id))
        result = [dict(zip(tuple(query.keys()), i)) for i in query.cursor]
        return jsonify(result)

api.add_resource(Produto, '/produtos')

resp = Response("sei la")
resp.headers['Access-Control-Allow-Origin'] = '*'

if __name__ == '__main__':
    app.run()