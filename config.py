# http://flask.pocoo.org/docs/1.0/config/
class BaseConfig(object):
    '''
    Base config class
    '''
    DEBUG = True
    TESTING = False


class ProductionConfig(BaseConfig):
    '''
    Production specific config
    '''
    DEBUG = False


class DevelopmentConfig(BaseConfig):
    '''
    Development environment specific configuration
    '''
    DEBUG = True
    TESTING = True
