import mysql.connector as MySQLdb

class EVENT_USER:
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
        
    def getevents(self,uid):
        self.db_connect()
        
        self.cur.execute("select * from event_user where u_id = '{0}'".format(uid))
        events = self.cur.fetchall()
        print(events)
        e =[]
        for e_id, uid in events:
            e.append(int(e_id))
        print("in eve_use")
        print(e)
        return e
        
    def delete(self,eid):
        self.db_connect()
        
        self.cur.execute("delete from event_user where e_id = {0}".format(eid))
        self.conn.commit()
        
    def insert(self,eid,uid):
        self.db_connect()
        
        self.cur.execute("insert into event_user(e_id,u_id) values('{0}','{1}')".format(eid,uid))
        self.conn.commit()
       
    
   
