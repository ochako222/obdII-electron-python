import sys
import obd

def check_obd_connection():
    status = obd.OBD().status()
    return status

def say_hello():
    return 'hello'
    
    
def main():
    if len(sys.argv) > 1:
        if sys.argv[1] == "say_hello":
            print(say_hello())
        elif sys.argv[1] == "check_obd":
            print(check_obd_connection())
    else:
        print("No valid command provided.")

if __name__ == "__main__":
    main()