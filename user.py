import mysql.connector as MySQLdb
class USER:
    def __init__(self):
        self.host = '127.0.0.1'                
        self.user = 'root'
        self.pswd = 'root'
        self.db = 'seproj'
        self.conn = None
        self.cur = None
    def db_connect(self):
        self.conn = MySQLdb.connect(user=self.user, password=self.pswd,host=self.host,database=self.db)
        self.cur = self.conn.cursor()
    
    def search(self,id):
        self.db_connect()
        
        self.cur.execute("SELECT * from users where uid = '{0}'".format(id))
        entries = self.cur.fetchall()
        print("hello")     
        print(entries) 
        if len(entries) == 1:
            return True
        else:
            return False
    def pwd(self,id):
        self.db_connect()

        self.cur.execute("SELECT pwd from users where uid = '{0}'".format(id))
        pwd = self.cur.fetchall()
        print(pwd[0][0])
        return pwd[0][0]
    def insert(self,data):
        self.db_connect()
        print(data['fname'])
        self.cur.execute("INSERT into users(uid,pwd,fname,sname,num,eid) VALUES('{0}' , '{1}' , '{2}' , '{3}' , '{4}','{5}')".format(data['uid'],data['passwd'],data['fname'],data['sname'],data['num'],data['eid']))
        self.conn.commit()
