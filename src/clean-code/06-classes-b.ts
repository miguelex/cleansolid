(()=>{

    // No aplicando el principio de responsabilidad unica
    
    type Gender = 'M'|'F';

    interface PersonProps {
        birthdate: Date;
        gender: Gender; 
        name: string; 
    }

    class Person {   
        public birthdate: Date;     
        public gender: Gender;
        public name: string;

        constructor({name, gender, birthdate}: PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    interface UserProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        name:string;
        role: string;
    }

    class User extends Person {

        public lastAccess: Date;
        public email: string;
        public role: string;

        constructor({
            birthdate,
            gender,
            name,
            email,
            role,
        }: UserProps){
            super({name, gender, birthdate});
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    interface UserSettingsProps {
        birthdate: Date;
        email: string;
        gender: Gender;
        lastOpenFolder: string;
        name:string;
        role: string;
        workingDirectory: string;
    }

    class UserSettings extends User {
        
        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor({
            birthdate,
            email,
            gender,
            lastOpenFolder,
            name,
            role,
            workingDirectory,
        }: UserSettingsProps){
            super({email, role, name, gender, birthdate});
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        birthdate: new Date ('2001-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'admin',
        workingDirectory: '/usr/home',
    });

    console.log({userSettings, areCredentialsValid: userSettings.checkCredentials()});
})();