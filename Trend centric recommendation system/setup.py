from setuptools import setup


with open("README.md", "r", encoding="utf-8") as f:
    long_description = f.read()

REPO_NAME = "Myntra-Recommendation-System"
AUTHOR_USER_NAME = "Archana Patel"
SRC_REPO = "src"
LIST_OF_REQUIREMENTS = ['streamlit','flask']

setup(
    name=SRC_REPO,
    version="0.0.1",
    author=AUTHOR_USER_NAME,
    description="Fashion product Recommender System",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url=f"https://github.com/{AUTHOR_USER_NAME}/{REPO_NAME}",
    author_email="iec2022051@iiita.ac.in",
    packages=[SRC_REPO],
    # license="MIT",
    python_requires=">=3.7",
    install_requires=LIST_OF_REQUIREMENTS
)